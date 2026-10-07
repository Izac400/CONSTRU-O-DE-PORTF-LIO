// --- MÁSCARAS ---
function aplicarMascaras() {
    // CEP: xx.xxx-xxx
    const cep = document.getElementById('cep');
    cep.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g, '');
        if(v.length > 5) v = v.replace(/(\d{2})(\d{3})(\d{1,3})/, '$1.$2-$3');
        else if(v.length > 2) v = v.replace(/(\d{2})(\d{1,3})/, '$1.$2');
        e.target.value = v;
    });

    // CPF: xxx.xxx.xxx-xx
    const cpf = document.getElementById('cpf');
    cpf.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g, '');
        if(v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        else if(v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        else if(v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        e.target.value = v;
    });

    // TELEFONE: +55 (xx) xxxxx-xxxx
    const tel = document.getElementById('telefone');
    tel.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g, '');
        if(v.startsWith('55')) v = v.substring(2);
        let formatado = '+55 ';
        if(v.length > 0) formatado += `(${v.substring(0,2)}`;
        if(v.length > 2) formatado += `) ${v.substring(2,7)}`;
        if(v.length > 7) formatado += `-${v.substring(7,11)}`;
        e.target.value = formatado;
    });

    // CNPJ: xx.xxx.xxx/xxxx-xx
    const cnpj = document.getElementById('cnpj');
    cnpj.addEventListener('input', e => {
        let v = e.target.value.replace(/\D/g, '');
        if(v.length > 12) v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5');
        else if(v.length > 8) v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/, '$1.$2.$3/$4');
        else if(v.length > 5) v = v.replace(/(\d{2})(\d{3})(\d{1,3})/, '$1.$2.$3');
        else if(v.length > 2) v = v.replace(/(\d{2})(\d{1,3})/, '$1.$2');
        e.target.value = v;
    });
}

// --- ENVIO E MENSAGEM ---
document.getElementById('formCadastro').addEventListener('submit', e => {
    e.preventDefault(); // Não recarrega a página

    // Exibe mensagem
    const msg = document.getElementById('mensagemSucesso');
    msg.style.display = 'block';

    // (Opcional) Esconder após 5s
    setTimeout(() => msg.style.display = 'none', 5000);
});

// Inicia tudo quando carrega a página
document.addEventListener('DOMContentLoaded', aplicarMascaras);

