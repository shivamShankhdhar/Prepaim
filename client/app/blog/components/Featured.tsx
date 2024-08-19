import React from "react";
import PostItem from "./PostItem";
const Featured = () => {
  return (
    <div className="w-full py-1 flex flex-col">
      <h1 className="text-[2.5rem]">
        <span className="font-semibold">Hello, Welcome to our Blog</span>,
        Discover stories and creative ideas.
      </h1>
      <PostItem
        title="this is the title that we have for this post."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere veritatis atque aliquid quibusdam! Tenetur, voluptas beatae. Dolorem tempora nobis, perferendis eligendi maxime quo, cumque suscipit quia possimus porro cupiditate inventore natus sequi? Reiciendis eius corporis consectetur quis nesciunt asperiores provident dolorem temporibus, ipsa adipisci optio excepturi quae aliquam atque ea inventore blanditiis nam nostrum dignissimos iusto recusandae? Ad aspernatur animi nobis laudantium aliquam similique perspiciatis adipisci asperiores unde, magni consectetur nostrum neque dicta iure vitae numquam, ipsum, quam velit! Rem, in corporis! Non quaerat cumque tempora deserunt natus quam assumenda accusamus corporis saepe, a voluptas culpa reprehenderit quis voluptate asperiores minus molestiae, tenetur facere quas porro architecto. Quisquam quidem aliquid ratione eius aliquam officia debitis at repellendus. Aliquid est voluptatum praesentium officiis facilis id exercitationem, ea sed atque tempora laboriosam, animi minima. Tempora, accusantium? Doloremque cupiditate voluptatem sequi praesentium deserunt, id sapiente ducimus, atque, culpa adipisci blanditiis nihil maxime."
        imageUrl="/assets/blog/subjectbg.jpg"
        category={"Web Development"}
      />
    </div>
  );
};

export default Featured;
