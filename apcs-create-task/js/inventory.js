const inventory = [
  //list£
  {
    title: "Fantastic Mr.Fox",
    author: "Roald Dahl",
    image:
      "https://th.bing.com/th/id/OIP.B4sZQ70KwhqWGoOOJE03DAHaJ-?pid=ImgDet&rs=1",
    stock: 35,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    stock: 26,
  },
  {
    title: "Chrysanthemum",
    author: "Kevin Henkes",
    image: "https://i.thenile.io/r1000/9780688147327.jpg?r=5e9135748fcbb",
    stock: 5,
  },
  {
    title: "Goosebumps",
    author: "R.L.Stein",
    image:
      "https://th.bing.com/th/id/OIP.0HnzcNNV_qbornSjq393GgHaKw?pid=ImgDet&rs=1",
    stock: 7,
  },
  {
    title: "Harry Potter:The Prisoner of Azkaban",
    author: "J.K.Rowling",
    image:
      "https://th.bing.com/th/id/R.ae8bcc945ab78259bd8a6d0b7af247a5?rik=LFG55mEsx3OVWw&riu=http%3a%2f%2fcherryblossom-books.com%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fimage%2f1200x%2f9df78eab33525d08d6e5fb8d27136e95%2fp%2fa%2fpa-cover-large.jpg&ehk=fx4F9b%2fWbkMUDLEBARzhQOxVjQTtb3shlAZkutovC2k%3d&risl=&pid=ImgRaw&r=0",
    stock: 21,
  },
  {
    title: "Echo",
    author: "Pam Munuez",
    image:
      "https://1.bp.blogspot.com/-lAg_da-o6o0/V2XG48Ip9_I/AAAAAAAAjP0/lioDFnNJ_P4R_x9SXyIkd0eU81kles1PACLcB/s1600/ECHO-medal.jpg",
    stock: 5,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    image:
      "https://1.bp.blogspot.com/-lAg_da-o6o0/V2XG48Ip9_I/AAAAAAAAjP0/lioDFnNJ_P4R_x9SXyIkd0eU81kles1PACLcB/s1600/ECHO-medal.jpg",
    stock: 16,
  },
  {
    title: "Lord of The Rings",
    author: "J.R.R.Tolkien",
    image:
      "https://www.oberlo.com/media/1603897585-image12-1.jpg?fm=webp&w=1824&fit=max",
    stock: 12,
  },
  {
    title: "Flowers For Algernon",
    author: "Daniel Keyes",
    image:
      "https://i.cbc.ca/1.4149433.1496843891!/fileImage/httpImage/image.jpg_gen/derivatives/original_1180/title-cover-flowers-for-algernon-by-daniel-keyes.jpg",
    stock: 42,
  },
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image:
      "https://th.bing.com/th/id/R.9839d65ba01279ac5664d962c4568165?rik=6zs3jvL3cNEQvg&pid=ImgRaw&r=0",
    stock: 12,
  },
  {
    title: "The Apocolypse Seven",
    author: "Gene Doucette",
    image:
      "https://th.bing.com/th/id/OIP.wis0NpQTcpNYo_lgCra-hgHaLI?pid=ImgDet&rs=1",
    stock: 16,
  },
  {
    title: "Call of the Wild",
    author: "Jack London",
    image:
      "https://th.bing.com/th/id/R.98b1febe107b66927fe31f9e8628eff2?rik=UFURY3C8yqzQng&pid=ImgRaw&r=0",
    stock: 21,
  },
  {
    title: "The Lion, the Witch, and the Wardrobe",
    author: "C.S. Lewis",
    image:
      "https://www.oberlo.com/media/1603897587-image5.jpg?fm=webp&w=1824&fit=max",
    stock: 23,
  },
  {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    image:
      "https://th.bing.com/th/id/R.7c5697ee72aae7fe607f69d223740452?rik=sgWxstAv8tg2Eg&riu=http%3a%2f%2fd28hgpri8am2if.cloudfront.net%2fbook_images%2fonix%2fcvr9781471173936%2fthe-great-gatsby-9781471173936_hr.jpg&ehk=Jz0jBOB5sZkGZ0GWHtNFPKtFLQNRZEIuO6rAtLbpOOA%3d&risl=&pid=ImgRaw&r=0",
    stock: 5,
  },

  {
    title: "1984",
    author: "George Orwell",
    image:
      "https://www.oberlo.com/media/1603897567-image39-1.jpg?fm=webp&w=1824&fit=max",
    stock: 8,
  },

  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://www.oberlo.com/media/1603897587-image7.jpg?fm=webp&w=1824&fit=max",
    stock: 19,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D.Salinger",
    image:
      "https://www.oberlo.com/media/1603897573-image35.jpg?fm=webp&w=1824&fit=max",
    stock: 23,
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    image:
      "https://www.oberlo.com/media/1603897573-image38-1.jpg?fm=webp&w=1824&fit=max",
    stock: 13,
  },
  {
    title: "Fahrenehit 451",
    author: "Ray Bradbury",
    image:
      "https://www.oberlo.com/media/1603897578-image19-2.jpg?fm=webp&w=1824&fit=max",
    stock: 10,
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    image:
      "https://www.oberlo.com/media/1603897574-image33-1.jpg?fm=webp&w=1824&fit=max",
    stock: 6,
  },
];
export { inventory };
