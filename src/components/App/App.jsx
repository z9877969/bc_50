import "./App.css";

import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Cart />
    </>
  );
};

export default App;

// const Section = ({ children, title, wrappedEls }) => {
//   return (
//     <section>
//       <div className="container">
//         {title && <h2>{title}</h2>}
//         {children}
//         {wrappedEls}
//       </div>
//     </section>
//   );
// };

// {
//   /* <section>
//   <div className="container">
//     <h2>Title</h2>
//     <ul>
//       <li>Item</li>
//       <li>Item</li>
//       <li>Item</li>
//     </ul>
//   </div>
// </section> */
// }

// {/* <Section
//   wrappedEls={
//     <ul>
//       <li>Item</li>
//       <li>Item</li>
//       <li>Item</li>
//     </ul>
//   }
// />;

// <Section>
//   <ul>
//     <li>
//       <img src="" alt="" />
//     </li>
//     <li>
//       <img src="" alt="" />
//     </li>
//     <li>
//       <img src="" alt="" />
//     </li>
//   </ul>
// </Section>; */}
