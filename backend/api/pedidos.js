// API de Pedidos para Vercel Serverless Functions

let pedidos = [];

export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method === 'POST') {
        try {
            const { nome, telefone, itens, total, entrega, endereco, pagamento, observacoes } = req.body;
            
            // Validação básica
            if (!nome || !telefone || !itens || !total) {
                return res.status(400).json({ 
                    error: 'Campos obrigatórios não preenchidos',
                    message: 'Por favor, preencha todos os campos obrigatórios'
                });
            }
            
            // Criar novo pedido
            const novoPedido = {
                id: Date.now(),
                nome,
                telefone,
                itens,
                total,
                entrega: entrega || 'entrega',
                endereco: endereco || '',
                pagamento,
                observacoes: observacoes || '',
                status: 'pendente',
                dataCriacao: new Date().toISOString()
            };
            
            pedidos.push(novoPedido);
            
            // Retornar sucesso
            return res.status(201).json({
                success: true,
                message: 'Pedido confirmado com sucesso!',
                pedido: novoPedido
            });
            
        } catch (error) {
            console.error('Erro ao processar pedido:', error);
            return res.status(500).json({
                error: 'Erro interno do servidor',
                message: 'Ocorreu um erro ao processar seu pedido. Tente novamente.'
            });
        }
    }
    
    if (req.method === 'GET') {
        return res.status(200).json({
            success: true,
            pedidos: pedidos,
            total: pedidos.length
        });
    }
    
    return res.status(405).json({ error: 'Método não permitido' });
}
