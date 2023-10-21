import React from 'react';
import 'handsontable/dist/handsontable.full.css'; // Importar os estilos do Handsontable
import Handsontable from 'handsontable';

const Planilha: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Dados da planilha com as alterações e acréscimos
  const data = [
    ['Subfases', 'Meses', 'Horas Mes', 'Feriados', 'Dias', 'Descrição', 'Tipo Lista', 'Nome Serviço', 'Equipe'],
    ['Planejamento', 'Jan', 8, '01-jan-23', 'domingo', 'Ano Novo', 'Geral', 'Arquitetura', 'Serviços Gerenciados'],
    ['Workshop', 'Fev', 8, '25-jan-23', 'quarta-feira', 'Aniver Cidade São Paulo', 'Geral', 'Gestão Projeto', 'Projetos'],
    ['arquitetura', 'Mar', 8, '21-fev-23', 'terça-feira', 'Carnaval', 'Geral', 'Especialista Implantação', 'Projetos'],
    ['Configuração', 'Abr', 8, '07-abr-23', 'sexta-feira', 'Sexta-feira Santa', 'Geral', 'Fabrica CFG', 'Fabrica Configuração'],
    ['Playback', 'Mai', 8, '21-abr-23', 'sexta-feira', 'Tiradentes', 'Geral', 'Fabrica SW', 'Fabrica Software'],
    ['Relatórios', 'Jun', 8, '01-mai-23', 'segunda-feira', 'Dia do Trabalho', 'Geral', 'Suporte', 'AMS'],
    ['Extensões', 'Jul', 8, '08-jun-23', 'quinta-feira', 'Corpus Christi', 'Geral', 'Melhorias', 'Business Agility'],
    ['Teste Unitário', 'Ago', 8, '09-jul-23', 'domingo', 'Revolução Constitucionalista de 1932', 'Geral', 'Testes', 'Fabrica Teste'],
    ['Teste Integrado', 'Set', 8, '07-set-23', 'quinta-feira', 'Independência do Brasil', 'Geral', 'Infra Cloud', 'Infraestrutura'],
    ['Cutover', 'Out', 8, '02-nov-23', 'quinta-feira', 'Finados', 'Geral', 'Nome Serviço', ''],
    ['Operação Assistida', 'Nov', 8, '15-nov-23', 'quarta-feira', 'Proclamação da República', 'Geral', 'Nome Serviço', ''],
  ];

  // Configuração do Handsontable
  const hotSettings = {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    autoColumnSize: true,
    afterChange: (changes: any, source: any) => {
      // Adicionar lógica para lidar com as alterações na planilha
      if (changes) {
        console.log('Alterações na planilha:', changes);
      }
    },
  };

  React.useEffect(() => {
    if (containerRef.current) {
      const hot = new Handsontable(containerRef.current, hotSettings);
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} className="spreadsheet-container"></div>
    </div>
  );
};

export default Planilha;
