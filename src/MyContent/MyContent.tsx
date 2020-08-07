import React from 'react';
import MyButton from '../MyButton/MyButton';
import MySum from '../MySum/MySum';
import MyText, { IMyTextProps } from '../MyText/MyText';

interface IMyContentProps extends IMyTextProps { }

const MyContent: React.FC<IMyContentProps> = ({ text }) =>
    <>
        <div>
            <MyButton label='Abc button' />
        </div>
        <div>
            <MySum numOne={4} numTwo={3} />
        </div>
        <div>
            <MyText text={text} />
        </div>
    </>

export default MyContent;
