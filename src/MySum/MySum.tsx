import React from 'react';

export interface IMySumProps {
    numOne: number
    numTwo: number
}

const MySum: React.FC<IMySumProps> = ({ numOne, numTwo }) => {
    const sum: number = numOne + numTwo;
    return <>{sum}</>;
}

export default MySum;
