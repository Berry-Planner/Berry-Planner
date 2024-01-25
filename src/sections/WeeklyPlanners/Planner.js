import ProductList from '../../components/ProductList';

const planners = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'logo.svg',
    },
    {
      id: 2,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'logo.svg',
    },
    {
      id: 3,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'logo.svg',
    },
    {
      id: 4,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'logo.svg',
    },
    {
      id: 5,
      name: 'Product 1',
      description: 'This is the description for Product 1.',
      image: 'logo.svg',
    }
  ];

  function WeeklyPlanner(){
    return(
      <section id = "weekly-planner">
        <h2>Weekly Study Planners</h2>
        <ProductList products={planners} />
      </section>
    )
  }
  export default WeeklyPlanner;
