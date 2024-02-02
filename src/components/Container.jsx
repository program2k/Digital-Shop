const Container = ({ children, classChild }) => {
  return (
    <>
      <section className={classChild}>
        <div className="container-xxl">{children}</div>
      </section>
    </>
  );
};

export default Container;
