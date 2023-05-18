import React from 'react';

type OrderBlockProps = {
  icon?: React.ReactNode;
  title?: string;
  color?: string;
  children?: React.ReactNode;
};

const OrderBlock: React.FC<OrderBlockProps> = ({
  title,
  color = 'rgb(245, 253, 248)',
  children,
  icon,
}) => {
  return (
    <div
      className=" w-full h-36 rounded-md drop-shadow-md relative p-4 mt-6"
      style={{ backgroundColor: color }}
    >
      <div className=" absolute right-3 top-3">{icon}</div>
      <div className="w-full h-[90%] relative">{children}</div>
      {title}
    </div>
  );
};

export default OrderBlock;
