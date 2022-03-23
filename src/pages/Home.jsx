// components
import PackageItem from "../components/packageItem";

export default function Home({ data }) {
  // components
  const packageItems = data.map((item) => (
    <PackageItem key={item.id} item={item} />
  ));

  // function filterClonedItem() {
  //   const clonedItems = [...data];
  //   const newList = clonedItems.filter((item) => item.status === "delivered");
  //   setData(newList);
  // }

  return (
    <div>
      {packageItems}
      <button>Hello</button>
    </div>
  );
}
