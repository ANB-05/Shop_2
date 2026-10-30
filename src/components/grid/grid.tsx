interface ProductGridProps {
    children: React.ReactNode;
}

function Grid({ children }: ProductGridProps) {
    return (
        <div className="my-3 grid grid-cols-1 min-[800px]:grid-cols-2 min-[1300px]:grid-cols-3 gap-5 justify-items-center">
            {children}
        </div>
    );
}

export default Grid;