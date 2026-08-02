// listar anúncios ou pesquisas
export function listarAnuncios(req, res) {
    const { pesquisa } = req.query;

    if (pesquisa) {
        return res.json({
            message: `Pesquisa relacionada a ${pesquisa}`
        });
    }

    return res.json({
        message: "Listando todos os anúncios"
    });
}

// listar anúncio por id
export function listarAnuncioPorId(req, res) {
    const { id } = req.params;

    return res.json({
        message: `Anúncio com id ${id}`
    });
}

// criar anúncio
export function criarAnuncio(req, res) {
    const { titulo, descricao, preco, categoria } = req.body;

    if (!titulo) {
        return res.status(400).json({
            message: "O título é obrigatório."
        });
    }

    if (!categoria) {
        return res.status(400).json({
            message: "A categoria é obrigatória."
        });
    }

    if (preco === undefined) {
        return res.status(400).json({
            message: "O preço é obrigatório."
        });
    }

    return res.status(201).json({
        message: "Anúncio criado com sucesso.",
        anuncio: {
            titulo,
            descricao,
            preco,
            categoria
        }
    });
}

// atualizar anúncio
export function atualizarAnuncio(req, res) {
    const { id } = req.params;
    const { titulo, descricao, preco, categoria } = req.body;

    if (!titulo) {
        return res.status(400).json({
            message: "O título é obrigatório."
        });
    }

    if (!categoria) {
        return res.status(400).json({
            message: "A categoria é obrigatória."
        });
    }

    if (preco === undefined) {
        return res.status(400).json({
            message: "O preço é obrigatório."
        });
    }

    return res.json({
        message: `Anúncio com id ${id} atualizado com sucesso.`,
        anuncio: {
            titulo,
            descricao,
            preco,
            categoria
        }
    });
}

// deletar anúncio
export function deletarAnuncio(req, res) {
    const { id } = req.params;

    return res.json({
        message: `Anúncio ${id} excluído`
    });
}