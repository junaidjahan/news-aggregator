type Color = 'primary' | 'secondary' | 'gray';
type Size = 'xs' | 'sm' | 'md' | 'lg';

interface TagProps {
    title: string;
    color: Color;
    size?: Size;
}

export const BaseTag = (props: TagProps) => {
    const tagColor = {
        primary: 'bg-primary-100 text-primary-700',
        secondary: 'bg-secondary-100 text-cyan-700',
        gray: 'bg-gray-100 text-gray-700'
    };
    const size = {
        xs: '!p-1 !px-2.5  !text-xs',
        sm: '!p-1 !px-2.5 !text-sm',
        md: '!p-1 !px-3 !text-base',
        lg: '!p-1.5 !px-4 !text-lg'
    };

    return (
        <>
            <div
                className={`${tagColor[props.color]} ${
                    size[props.size || 'sm']
                } w-fit px-2.5 rounded-full`}
            >
                <h1>
                    {props.title}
                </h1>
            </div>
        </>
    );
};
