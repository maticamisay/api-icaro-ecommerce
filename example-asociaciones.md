Imaginemos que tenemos dos modelos: `User` y `Post`. Un `User` puede tener muchos `Posts`, pero cada `Post` pertenece a un solo `User`. Aquí es cómo podríamos definir estos modelos y asociarlos:

1. **Modelo User**:

```javascript
// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "posts",
    });
  };

  return User;
};
```

2. **Modelo Post**:

```javascript
// models/Post.js
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Nota: 'Users' es el nombre de la tabla, Sequelize pluraliza automáticamente el nombre del modelo.
        key: "id",
      },
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "author",
    });
  };

  return Post;
};
```

3. **Inicialización y asociación de modelos**:

Cuando inicialices tus modelos, asegúrate de invocar la función `associate` para cada modelo:

```javascript
const Sequelize = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

// Asociar modelos
Object.values(sequelize.models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(sequelize.models));

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});
```

Con este código, Sequelize creará automáticamente la clave foránea `userId` en la tabla `Posts` que se referenciará a la columna `id` en la tabla `Users`.
