// This method, "up", MUST RETURN a knex.schema query.
// It will be executed when the command
// "knex migrate:latest" is run.
exports.up = knex => {
	return knex.schema.createTable("posts", table => {
	  table.increments("id");
	  // Create a column named "id" that uses
	  // the SERIAL type in postgres. This will
	  // be our PRIMARY KEY.
	  table.string("user_name");
	  // Creates a column of data-type VARCHAR(255)
	  // with the name "username".
	  table.text("content");
	  // Creates a column named "description" of data type
	  // "text".
	  table.string("image_Url");
	  table.timestamp("createdAt").default(knex.fn.now());
	  // Creates a column named "createdAt" of data type
	  // timestamp where its default is set to the
	  // at the time the row is inserted.
	  table.timestamp("updatedAt").default(knex.fn.now());
	});
  };
  
  // This method, "down", must return a knex.schema
  // query. The query should reverse the query done
  // in "exports.up". It's run when the command
  // "knex migrate:rollback" in executed in the
  // shell.
  exports.down = knex => {
	return knex.schema.dropTable("posts");
  };



// exports.up = function(knex) {
// 	return knex.schema.createTable('notes', table => {
// 		table.increments('id');
// 		table.string('name');
// 		table.text('body');
// 		table.timestamp('createdAt').default(knex.fn.now());
// 	});
// };

// exports.down = function(knex) {
// 	return knex.schema.dropTable('notes');
// };

// // This method, "up", MUST RETURN a knex.schema query.
// // It will be executed when the command
// // "knex migrate:latest" is run.
// exports.up = knex => {
// 	return knex.schema.createTable("posts", table => {
// 	  table.increments("id");
// 	  // Create a column named "id" that uses
// 	  // the SERIAL type in postgres. This will
// 	  // be our PRIMARY KEY.
// 	  table.string("username");
// 	  // Creates a column of data-type VARCHAR(255)
// 	  // with the name "username".
// 	  table.text("description");
// 	  // Creates a column named "description" of data type
// 	  // "text".
// 	  table.string("pictureUrl");
// 	  table.timestamp("createdAt").default(knex.fn.now());
// 	  // Creates a column named "createdAt" of data type
// 	  // timestamp where its default is set to the
// 	  // at the time the row is inserted.
// 	});
//   };
  
//   // This method, "down", must return a knex.schema
//   // query. The query should reverse the query done
//   // in "exports.up". It's run when the command
//   // "knex migrate:rollback" in executed in the
//   // shell.
//   exports.down = knex => {
// 	return knex.schema.dropTable("posts");
//   };