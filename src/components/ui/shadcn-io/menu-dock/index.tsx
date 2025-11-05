'use client';

import React, { useRef, useMemo } from 'react';
import { Home, Briefcase, Calendar, Shield, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, type MotionNodeAnimationOptions } from "framer-motion";

type IconComponentType = React.ElementType<{ className?: string }>;

export interface MenuDockItem {
  label: string;
  icon: IconComponentType;
  onClick?: () => void;
  animate?: MotionNodeAnimationOptions["animate"]
}

export interface MenuDockProps {
  items?: MenuDockItem[];
  className?: string;
  variant?: 'default' | 'compact' | 'large';
  orientation?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  animated?: boolean;
  activeSection: string | null
}

const defaultItems: MenuDockItem[] = [
    { label: 'home', icon: Home },
    { label: 'work', icon: Briefcase },
    { label: 'calendar', icon: Calendar },
    { label: 'security', icon: Shield },
    { label: 'settings', icon: Settings },
];

export const MenuDock: React.FC<MenuDockProps> = ({
  items,
  className,
  variant = 'default',
  orientation = 'horizontal',
  showLabels = true,
  animated = true,
  activeSection,
}) => {

  const finalItems = useMemo(() => {
     const isValid = items && Array.isArray(items) && items.length >= 2 && items.length <= 8;
     if (!isValid) {
        console.warn("MenuDock: 'items' prop is invalid or missing. Using default items.", items);
        return defaultItems;
     }
     return items;
  }, [items]);

  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleItemClick = (item: MenuDockItem) => {
    // active state is derived from the parent-provided `activeSection` string
    item.onClick?.();
  };

  const labelToSection = (label: string): string | null => {
    // map menu labels to page `data-section` values
    if (!label) return label;
    const key = label.toLowerCase();
    if (key === 'studies') return 'education';
    if (key === 'dark mode') return null;
    return key;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container: 'p-1',
          item: 'p-2 min-w-12',
          icon: 'h-4 w-4',
          text: 'text-xs'
        };
      case 'large':
        return {
          container: 'p-3',
          item: 'p-3 min-w-16',
          icon: 'h-6 w-6',
          text: 'text-base'
        };
      default:
        return {
          container: 'p-2',
          item: 'p-2 min-w-14',
          icon: 'h-5 w-5',
          text: 'text-sm'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <nav
      className={cn(
        'relative inline-flex items-center rounded-xl bg-card border border-border',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        styles.container,
        className
      )}
      role="navigation"
    >
      {finalItems.map((item, index) => {
        const sectionForItem = labelToSection(item.label);
        const isActive = activeSection != null && sectionForItem === activeSection;
        const IconComponent = item.icon as IconComponentType;

        return (
          <motion.button
            animate={item.animate}
            key={`${item.label}-${index}`}
            ref={(el) => { itemRefs.current[index] = el; }}
            className={cn(
              'relative flex flex-col items-center justify-center rounded-lg transition-all duration-200',
              'hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              styles.item,
              isActive && 'text-primary',
              !isActive && 'text-muted-foreground hover:text-foreground'
            )}
            onClick={() => handleItemClick(item)}
            aria-label={item.label}
            type="button"
          >
            <div className={cn(
              'flex items-center justify-center transition-all duration-200',
              animated && isActive && 'animate-bounce',
              orientation === 'horizontal' && showLabels ? 'mb-1' : '',
              orientation === 'vertical' && showLabels ? 'mb-1' : ''
            )}>
              <IconComponent className={cn(styles.icon, 'transition-colors duration-200')} />
            </div>
            
            {showLabels && (
              <span
                ref={(el) => { textRefs.current[index] = el; }}
                className={cn(
                  'font-medium transition-colors duration-200 capitalize',
                  styles.text,
                  'whitespace-nowrap'
                )}
              >
                {item.label}
              </span>
            )}
          </motion.button>
        );
      })}
      

    </nav>
  );
};