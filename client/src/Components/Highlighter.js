"use client";

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";


export function Highlighter({
    children,
    action = "highlight",
    color = "#ffd1dc",
    strokeWidth = 1.5,
    animationDuration = 600,
    iterations = 2,
    padding = 2,
    multiline = true,
    isView = false,
}) {
    const elementRef = useRef(null);
    const annotationRef = useRef(null);
    const isInView = useInView(elementRef, { once: true, margin: "-10%" });

    const shouldShow = !isView || isInView;

    useEffect(() => {
        if (!shouldShow) return;

        const el = elementRef.current;
        if (!el) return;

        if (annotationRef.current) {
            try {
                annotationRef.current.remove();
            } catch (err) { }
            annotationRef.current = null;
        }

        annotationRef.current = annotate(el, {
            type: action,
            color,
            strokeWidth,
            animationDuration,
            iterations,
            padding,
            multiline,
        });

        annotationRef.current.show();

        return () => {
            if (annotationRef.current) {
                try {
                    annotationRef.current.remove();
                } catch (err) { }
                annotationRef.current = null;
            }
        };
    }, [
        shouldShow,
        action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
    ]);

    return (
        <span ref={elementRef} className="relative inline-block bg-transparent">
            {children}
        </span>
    );
}

Highlighter.propTypes = {
    children: PropTypes.node.isRequired,
    action: PropTypes.oneOf([
        "highlight",
        "underline",
        "box",
        "circle",
        "strike-through",
        "crossed-off",
        "bracket",
    ]),
    color: PropTypes.string,
    strokeWidth: PropTypes.number,
    animationDuration: PropTypes.number,
    iterations: PropTypes.number,
    padding: PropTypes.number,
    multiline: PropTypes.bool,
    isView: PropTypes.bool,
};
