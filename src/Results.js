import { useGlobalContext } from "./context";
import Item from "./Item";

const Results = () => {
  const { items, removeItem } = useGlobalContext();
  return (
    <section>
      {items.map((item) => {
        return <Item {...item} key={item.id} removeItem={removeItem} />;
      })}
    </section>
  );
};
export default Results;
