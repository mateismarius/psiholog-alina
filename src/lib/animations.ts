// src/lib/animations.ts - Animation variants library
export const fadeInVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export const slideUpVariants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export const slideInVariants = {
    left: {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    right: {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    top: {
        hidden: { opacity: 0, y: -60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    },
    bottom: {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }
}

export const scaleVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const staggerItemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const hoverScaleVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1,
            ease: "easeInOut"
        }
    }
}

export const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

export const pulseVariants = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}