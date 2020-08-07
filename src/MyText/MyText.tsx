
import React from 'react';

export interface IMyTextProps {
    text: string
}

const MyText: React.FC<IMyTextProps> = ({ text }) => <span>{text}</span>

export default MyText;
