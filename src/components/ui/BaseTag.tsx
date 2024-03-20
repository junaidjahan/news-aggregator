type Color = 'primary' | 'secondary' | 'gray';

interface TagProps {
    title: string;
    color: Color;
}

export const BaseTag = (props: TagProps) => {
    const tagColor = {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-cyan-700',
        gray: 'bg-gray-100 text-gray-700'
    };

    return (
        <>
            <div
                className={`${
                    tagColor[props.color]
                } w-fit p-1 px-2.5 text-xs rounded-full`}
            >
                <h1>{props.title}</h1>
            </div>
        </>
    );
};
