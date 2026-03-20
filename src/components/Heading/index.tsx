import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading(props: HeadingProps) {

    console.log('Heading props:', props);
    return (<h1 className={styles.heading}>{props.children}</h1>);
}