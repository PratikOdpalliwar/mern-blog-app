import React from "react";
import PosstAuthor from "../components/PostAuthor"
import Thumbnail from "../assets/blog22.jpg"
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="container mx-auto mt-8">
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <PosstAuthor />
      <div className="flex justify-between items-center mt-4">
        <div>
          <Link to="/posts/werwer/edit" className="text-blue-500">
            Edit
          </Link>
          <span className="mx-2">|</span>
          <Link to="/posts/werwer/delete" className="text-red-500">
            Delete
          </Link>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-4">This is the post Title!</h1>
      <div className="mt-4">
        <img src={Thumbnail} alt="" className="w-full h-auto rounded-lg" />
      </div>
      <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque omnis totam hic nobis excepturi labore autem? Itaque in aut excepturi, inventore saepe tenetur facere quam cupiditate mollitia voluptatum? Distinctio, ipsa. Iure quod eligendi, explicabo beatae perferendis nemo facilis ipsa.
        </p>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam minus, necessitatibus eius sapiente ducimus dolorem? Placeat eos nobis recusandae, adipisci odit cupiditate! Praesentium unde, veniam porro consequatur temporibus tempore cum aperiam ipsa itaque earum esse qui veritatis blanditiis est atque nihil dolores in suscipit necessitatibus quisquam. Numquam dolor nam porro incidunt velit dolorum culpa!
        </p>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aut impedit voluptatibus! Numquam velit nobis rem quod nihil officia ducimus saepe molestias enim fuga a sed, est unde quaerat minus itaque, natus explicabo ipsam! Necessitatibus atque, nostrum quibusdam nihil nobis architecto magnam quidem voluptas laboriosam sed. Ratione et, nostrum ipsum iure debitis non qui corrupti, eius adipisci veritatis eos suscipit delectus voluptas odio pariatur at veniam quas ipsam porro! Ullam mollitia consequuntur expedita temporibus dolores tempore inventore, officiis, quas quidem velit obcaecati necessitatibus aliquam tempora quisquam quasi ad iusto nostrum esse excepturi aut fugit ipsam. Perspiciatis sapiente reprehenderit explicabo omnis quae! Soluta quasi veritatis aperiam necessitatibus voluptates quas alias ratione porro?
        </p>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa cumque, harum distinctio perspiciatis iure laudantium atque necessitatibus explicabo exercitationem minus!
        </p>
        <p className="mt-4 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque doloremque, ab saepe alias inventore eos corporis quidem facere aspernatur. Accusantium quibusdam voluptatem amet facere eveniet doloribus laborum expedita soluta alias, obcaecati dolores optio rerum totam nihil consequatur, nisi libero, animi ipsam assumenda? Explicabo alias fuga exercitationem illo officiis fugit dolorum, assumenda culpa vel totam mollitia animi maxime quae deleniti earum voluptatum error rerum velit est magnam veritatis, nihil libero? Vero dolore quis maiores excepturi quas aliquid ad laborum necessitatibus, voluptatem nihil aperiam accusantium ab possimus iste corporis, dicta maxime numquam! Deleniti quod adipisci quae dolores! Consequuntur natus facilis incidunt itaque iure consectetur nemo adipisci nobis neque, aperiam, quibusdam est dolores deleniti voluptas cumque ad animi facere quia in! Ut quis soluta, maiores optio ipsum adipisci in libero nemo sapiente, itaque dignissimos tenetur repellendus quasi beatae suscipit! Ut et repudiandae aut explicabo quidem dignissimos animi illo repellat provident maiores sapiente placeat, incidunt impedit minima vel aperiam pariatur expedita magni eius culpa. Laudantium ut nisi nesciunt veritatis quisquam magni eum, unde velit eveniet perspiciatis ipsum deleniti laboriosam praesentium cum quae assumenda quas ratione hic et ducimus ipsa recusandae error. Minus quas earum rem beatae asperiores dolor porro. Pariatur totam nostrum ducimus?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
