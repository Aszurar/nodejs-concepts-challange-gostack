const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateId(request, res, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  return next();
}

app.get("/repositories", (request, response) => {
  // TODO
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  // TODO
  const { title, url, techs} = request.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }
  repositories.push(repository);
  return response.status(201).json(repository);
});

app.put("/repositories/:id", validateId,(request, response) => {
  // TODO
  const {id} = request.params;
  const {title, url, techs} = request.body;
  const repository = repositories.find(repo => repo.id === id);
  
  if (!repository) {
    return response.status(400).json({ error: 'Repository not found' });
  }
  repository.title = title;
  repository.url = url;
  repository.techs = techs;

  return response.status(200).json(repository);
});

app.delete("/repositories/:id", validateId,(request, response) => {
  // TODO
  const {id} = request.params;
  const repositoriesFiltred = repositories.filter(repo => repo.id !== id);
  
  repositories.length = 0;
  repositories.push(...repositoriesFiltred);

  return response.status(204).send();
});

app.post("/repositories/:id/like", validateId,(request, response) => {
  // TODO

  const {id} = request.params;
  const repository = repositories.find(repo => repo.id === id);
  if (!repository) {
    return response.status(400).json({ error: 'Repository not found' });
  }
  repository.likes++;
  return response.status(200).json(repository);
});

module.exports = app;
