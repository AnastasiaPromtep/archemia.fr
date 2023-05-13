import * as React from 'react';
import IllustratedExample from "../illustrated-example/illustrated-example";
import { container } from './work-showcase.module.css';

const WorkShowcase = () => {
    return (
        <main className={ container }>
            <IllustratedExample></IllustratedExample>
        </main>
    );
};

export default WorkShowcase;