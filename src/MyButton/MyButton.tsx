import React from 'react';

export interface IMyButtonProps {
    label: string
    onClick?: () => void
}

const MyButton: React.FC<IMyButtonProps> = ({ label, onClick }) =>
    <button onClick={onClick}>
        {label}
    </button>

export default MyButton;
