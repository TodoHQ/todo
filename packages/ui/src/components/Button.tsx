interface AppButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const AppButton = ({ onClick, children }: AppButtonProps) => {
    return (
        <button style={{ padding: '.5rem 1rem' }} onClick={onClick}>
            {children}
        </button>
    );
};
