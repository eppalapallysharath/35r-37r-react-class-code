import React, { useEffect, useState } from "react";

const Items = ({ split }) => {
  const [item, setItem] = useState([]);
  console.log("child component rerendered");
  useEffect(() => {
    console.log("rerendered and function recreated");
    setItem(split());
  }, [split]);
  return (
    <div>
      Items
      {item.map((v) => (
        <li>{v}</li>
      ))}
    </div>
  );
};

const MemoItems = React.memo(Items);

// export default Items;
export default MemoItems;
