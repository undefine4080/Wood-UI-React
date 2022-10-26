import commonProps from "@base/types/commonInterface";

interface propsButton extends commonProps {
    type?: 'plain' | 'important' | 'danger' | 'success' | 'border' | 'warn' | 'line';
    onClick?: ( event: React.MouseEvent<HTMLButtonElement> ) => any;
    loading?: boolean;
    size?: 'small' | 'normal' | 'large';
    disabled?: boolean;
}

export type { propsButton }; 
