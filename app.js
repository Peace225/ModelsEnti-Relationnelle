const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/gym-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Gymnase = require('./models/Gymnase');
const Membre = require('./models/Membre');
const Coach = require('./models/Coach');
const Seance = require('./models/Seance');
const Inscription = require('./models/Inscription');

// Routes and logic here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Gymnase Routes
app.post('/gymnases', async (req, res) => {
    const gymnase = new Gymnase(req.body);
    await gymnase.save();
    res.status(201).send(gymnase);
  });
  
  app.get('/gymnases', async (req, res) => {
    const gymnases = await Gymnase.find();
    res.send(gymnases);
  });
  
  app.get('/gymnases/:id', async (req, res) => {
    const gymnase = await Gymnase.findById(req.params.id);
    res.send(gymnase);
  });
  
  app.put('/gymnases/:id', async (req, res) => {
    const gymnase = await Gymnase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(gymnase);
  });
  
  app.delete('/gymnases/:id', async (req, res) => {
    await Gymnase.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  
  // Coach Routes
app.post('/coach', async (req, res) => {
    const coach = new Gymnase(req.body);
    await coach.save();
    res.status(201).send(coach);
  });
  
  app.get('/coach', async (req, res) => {
    const coach = await Coach.find();
    res.send(coach);
  });
  
  app.get('/coach/:id', async (req, res) => {
    const coach = await Coach.findById(req.params.id);
    res.send(coach);
  });
  
  app.put('/coach/:id', async (req, res) => {
    const coach = await Coach.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(coach);
  });
  
  app.delete('/coach/:id', async (req, res) => {
    await Coach.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  
  // Inscription Routes
app.post('/inscription', async (req, res) => {
    const inscription = new Inscription(req.body);
    await inscription.save();
    res.status(201).send(gymnase);
  });
  
  app.get('/inscription', async (req, res) => {
    const inscription = await Inscription.find();
    res.send(inscription);
  });
  
  app.get('/inscription/:id', async (req, res) => {
    const inscription = await Inscription.findById(req.params.id);
    res.send(gymnase);
  });
  
  app.put('/inscription/:id', async (req, res) => {
    const inscription = await Inscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(inscription);
  });
  
  app.delete('/inscription/:id', async (req, res) => {
    await Inscription.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  
  // Membre Routes
app.post('/membre', async (req, res) => {
    const membre = new Membre(req.body);
    await membre.save();
    res.status(201).send(membre);
  });
  
  app.get('/membre', async (req, res) => {
    const membre = await Membre.find();
    res.send(membre);
  });
  
  app.get('/membre/:id', async (req, res) => {
    const membre = await Membre.findById(req.params.id);
    res.send(membre);
  });
  
  app.put('/membre/:id', async (req, res) => {
    const membre = await Membre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(membre);
  });
  
  app.delete('/membre/:id', async (req, res) => {
    await Membre.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });

    // Seance Routes
app.post('/seance', async (req, res) => {
    const seance = new Seance(req.body);
    await seance.save();
    res.status(201).send(seance);
  });
  
  app.get('/seance', async (req, res) => {
    const seance= await Seance.find();
    res.send(seance);
  });
  
  app.get('/seance/:id', async (req, res) => {
    const seance = await Seance.findById(req.params.id);
    res.send(seance);
  });
  
  app.put('/seance/:id', async (req, res) => {
    const seance = await Seance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(seance);
  });
  
  app.delete('/seance/:id', async (req, res) => {
    await Seance.findByIdAndDelete(req.params.id);
    res.status(204).send();
  });
  