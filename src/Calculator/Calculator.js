import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
   
        return (
            <div>
                 <table>                
                    <tbody>
                        <tr>
                            <button>%</button>
                            <button>CE</button>
                            <button>C</button>
                            <button>DEL</button>
                        </tr>
                        <tr>
                            <button>1/x</button>
                            <button>x^2</button>
                            <button>x^1/2</button>
                            <button>/</button>
                        </tr>
                        <tr>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                            <button>*</button>
                        </tr>
                        <tr>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>-</button>
                        </tr>
                        <tr>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>+</button>
                        </tr>
                        <tr>
                            <button>+/-</button>
                            <button>0</button>
                            <button>.</button>
                            <button>=</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    
};

export default Calculator;