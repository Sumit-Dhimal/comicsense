import '../components.css';

const Category = ({categories}) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-4 gap-2">
        { 
          categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            > 

              <img 
                src={category.image}
                alt={`Img - ${category.name}`}
                className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* text */}
              <div className="absolute bottom-5 left-[30%]">
                <h3 className="outline-text text-3xl font-extrabold tracking-wide">
                  {category.name}
                </h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Category;