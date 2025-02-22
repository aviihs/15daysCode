const words = [
    {
        word: "addition",
        hint: "The process of adding numbers together."
    },
    {
        word: "subtraction",
        hint: "The process of taking one number away from another."
    },
    {
        word: "multiplication",
        hint: "The process of adding a number to itself a certain number of times."
    },
    {
        word: "division",
        hint: "The process of splitting a number into equal parts."
    },
    {
        word: "equation",
        hint: "A statement that the values of two mathematical expressions are equal."
    },
    {
        word: "variable",
        hint: "A symbol for a number we don't know yet."
    },
    {
        word: "algebra",
        hint: "A branch of mathematics that substitutes letters for numbers."
    },
    {
        word: "geometry",
        hint: "The study of shapes and the space these shapes occupy."
    },
    {
        word: "trigonometry",
        hint: "The study of the properties of triangles and trigonometric functions."
    },
    {
        word: "calculus",
        hint: "The branch of mathematics that deals with the finding and properties of derivatives and integrals of functions."
    },
    {
        word: "probability",
        hint: "The likelihood of a specific outcome or event taking place."
    },
    {
        word: "statistics",
        hint: "The practice or science of collecting and analyzing numerical data in large quantities."
    },
    {
        word: "arithmetic",
        hint: "The branch of mathematics dealing with the properties and manipulation of numbers."
    },
    {
        word: "fraction",
        hint: "A numerical quantity that is not a whole number."
    },
    {
        word: "decimal",
        hint: "A number that uses a decimal point to show the part of the number that is less than 1."
    },
    {
        word: "percent",
        hint: "A number or ratio expressed as a fraction of 100."
    },
    {
        word: "numerator",
        hint: "The number above the line in a common fraction showing how many of the parts indicated by the denominator are taken."
    },
    {
        word: "denominator",
        hint: "The number below the line in a common fraction; a divisor."
    },
    {
        word: "quadrilateral",
        hint: "A four-sided polygon."
    },
    {
        word: "parallelogram",
        hint: "A four-sided plane rectilinear figure with opposite sides parallel."
    },
    {
        word: "rhombus",
        hint: "A parallelogram with opposite equal acute angles, opposite equal obtuse angles, and four equal sides."
    },
    {
        word: "trapezoid",
        hint: "A quadrilateral with one pair of parallel sides."
    },
    {
        word: "circle",
        hint: "A round plane figure whose boundary consists of points equidistant from a fixed point."
    },
    {
        word: "radius",
        hint: "A straight line from the center to the circumference of a circle or sphere."
    },
    {
        word: "diameter",
        hint: "A straight line passing from side to side through the center of a circle or sphere."
    },
    {
        word: "circumference",
        hint: "The distance around the edge of a circle."
    },
    {
        word: "area",
        hint: "The extent or measurement of a surface or piece of land."
    },
    {
        word: "volume",
        hint: "The amount of space that a substance or object occupies."
    },
    {
        word: "surface area",
        hint: "The total area of the surface of a three-dimensional object."
    },
    {
        word: "pythagorean",
        hint: "Relating to or denoting the theorem that the square of the hypotenuse of a right-angled triangle is equal to the sum of the squares of the other two sides."
    },
    {
        word: "theorem",
        hint: "A general proposition not self-evident but proved by a chain of reasoning."
    },
    {
        word: "hypothesis",
        hint: "A supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation."
    },
    {
        word: "conjecture",
        hint: "An opinion or conclusion formed on the basis of incomplete information."
    },
    {
        word: "proof",
        hint: "Evidence or argument establishing a fact or the truth of a statement."
    },
    {
        word: "corollary",
        hint: "A proposition that follows from one already proven."
    },
    {
        word: "postulate",
        hint: "A thing suggested or assumed as true as the basis for reasoning, discussion, or belief."
    },
    {
        word: "meeting",
        hint: "An assembly of people for a particular purpose, especially for formal discussion."
    },
    {
        word: "conference",
        hint: "A formal meeting for discussion."
    },
    {
        word: "seminar",
        hint: "A conference or other meeting for discussion or training."
    },
    {
        word: "workshop",
        hint: "A room or building in which goods are manufactured or repaired."
    },
    {
        word: "symposium",
        hint: "A conference or meeting to discuss a particular subject."
    },
    {
        word: "convention",
        hint: "A way in which something is usually done."
    },
    {
        word: "congress",
        hint: "A formal meeting or series of meetings for discussion between delegates."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain."
    },
    {
        word: "summit",
        hint: "The highest point of a hill or mountain"
    },
    {
        word: "canvas",
        hint: "A strong, coarse unbleached cloth made from hemp, flax, or a similar yarn, used to make items such as sails and tents and as a surface for oil painting."
    },
    {
        word: "palette",   
        hint: "A thin board or slab on which an artist lays and mixes colors."
    },
    {
        word: "exchange",
        hint:"An act of giving one thing and receiving another (especially of the same type or value) in return."
    },
    {
        word: "gallery",
        hint: "A room or building for the display or sale of works of art."
    },
    {
        word: "exhibit",
        hint: "Publicly display (a work of art or item) in an art gallery or museum or at a trade fair."
    },
    {
        word: "artwork",
        hint: "A painting, drawing, photograph, etc., that is created to be beautiful or to express an important idea or feeling."
    },
    {
        word: "sculpture",
        hint: "The art of making two- or three-dimensional representative or abstract forms, especially by carving stone or wood or by casting metal or plaster."
    },
    {
        word: "portrait",
        hint: "A painting, drawing, photograph, or engraving of a person, especially one depicting only the face or head and shoulders."
    },
    {
        word: "landscape",
        hint: "All the visible features of an area of countryside or land, often considered in terms of their aesthetic appeal."
    },
    {
        word: "still life",
        hint: "A painting or drawing of an arrangement of objects, typically including fruit and flowers and objects contrasting with these in texture, such as bowls and glassware."
    },
    {
        word: "abstract",
        hint: "Existing in thought or as an idea but not having a physical or concrete existence."
    },
    {
        word: "impressionism",
        hint: "A style or movement in painting originating in France in the 1860s, characterized by a concern with depicting the visual impression of the moment, especially in terms of the shifting effect of light and color."
    },
    {
        word: "expressionism",
        hint: "A style of painting, music, or drama in which the artist or writer seeks to express emotional experience rather than impressions of the external world."
    },
    {
        word: "realism",
        hint: "The attitude or practice of accepting a situation as it is and being prepared to deal with it accordingly."
    },
    {
        word: "surrealism",
        hint: "A 20th-century avant-garde movement in art and literature that sought to release the creative potential of the unconscious mind, for example by the irrational juxtaposition of images."
    },
    {
        word: "cubism",
        hint: "An early 20th-century style and movement in art, especially painting, in which perspective with a single viewpoint was abandoned and use was made of simple geometric shapes, interlocking planes, and, later, collage."
    },
    {
        word: "fauvism",
        hint: "A style of painting with vivid expressionistic and non-naturalistic use of color that flourished in Paris from 1905 and, although short-lived, had an important influence on subsequent artists, especially the German expressionists."
    },
    {
        word: "dadaism",
        hint: "A European artistic and literary movement that flourished between 1916 and 1922 and was characterized by a spirit of anarchic revolt against traditional conventions."
    },
    {
        word: "pop art",
        hint: "Art based on modern popular culture and the mass media, especially as a critical or ironic comment on traditional fine art values."
    },
    {
        word: "photography",
        hint: "The art or practice of taking and processing photographs."
    },
    {
        word: "architecture",
        hint: "The art or practice of designing and constructing buildings."
    },
    {
        word: "design",
        hint: "A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made."
    },
    {
        word: "craft",
        hint: "An activity involving skill in making things by hand."
    },
    {
        word: "pottery",
        hint: "Pots, dishes, and other articles made of earthenware or baked clay."
    },
    {
        word: "ceramics",
        hint: "Objects made from clay that are hardened by heat."
    },
    {
        word: "textile",
        hint: "A type of cloth or woven fabric."
    },
    {
        word: "fashion",
        hint: "A popular trend, especially in styles of dress and ornament or manners of behavior."
    }
]