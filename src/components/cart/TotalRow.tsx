const TotalRow = (props: any) => {
  return (
    <div
      className={
        props.className +
        ' flex items-center justify-between p-item rounded-item bg-list-item dark:bg-list-item-dark'
      }
    >
      <span>
        Total: <span className="line-through">${4500}</span>(30%) ${3800}
      </span>
      <button className="p-button rounded-button text-lg bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark">
        Checkout
      </button>
    </div>
  );
};

export default TotalRow;
