const request = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe("server", function () {
  describe("GET /", function () {
    it("should return 200 OK", function () {
      // make a GET request to / endpoint on the server
      return request(server) // return the async call to let jest know it should wait
        .get("/")
        .then(res => {
          // assert that the HTTP status code is 200
          expect(res.status).toBe(200);
        });
    });
  });

  describe("POST /hobbits", function () {
    beforeEach(async () => {
      await db("hobbits").truncate(); // empty the table and reset the id back to 1
    });

    it("return 201 on success", function () {
      return request(server)
        .post("/hobbits")
        .send({ name: "gaffer" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a message saying "Hobbit created successfully"', function () {
      return request(server)
        .post("/hobbits")
        .send({ name: "gaffer" })
        .then(res => {
          expect(res.body.message).toBe("Hobbit created successfully");
        });
    });

    it("add the hobbit to the db", async function () {
      const hobbitName = "gaffer";

      const existing = await db("hobbits").where({ name: hobbitName });
      expect(existing).toHaveLength(0);

      await request(server)
        .post("/hobbits")
        .send({ name: hobbitName })
        .then(res => {
          expect(res.body.message).toBe("Hobbit created successfully");
        });
      await request(server)
        .post("/hobbits")
        .send({ name: "sam" })
        .then(res => {
          expect(res.body.message).toBe("Hobbit created successfully");
        });

      const inserted = await db("hobbits"); //.where({ name: hobbitName });
      expect(inserted).toHaveLength(2);
    });
  });
});
