import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.`});
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(201).send({message: 'Autor atualizado com sucesso'});
            }else {
                res.status(500).send({message: err.message})
            }
        });
    }

    static listarAutorById = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
            }else {
                res.status(201).send(autores.toJSON())
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Id do Autor não localizado.`})
            }else {
                res.status(200).send({message: `id: ${id} - Autor excluido com sucesso.`})
            }
        })
    }
}

export default AutorController;