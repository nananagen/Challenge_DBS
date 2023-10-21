import React from 'react';
import 'handsontable/dist/handsontable.full.css'; // Importar os estilos do Handsontable
import Handsontable from 'handsontable';

const Spreadsheet: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Dados da planilha
  const data = [
    ['Nome', 'Idade', 'País'],
    ['Alice', 28, 'EUA'],
    ['Bob', 32, 'Canadá'],
    ['Charlie', 45, 'Reino Unido'],
  ];

  // Configuração do Handsontable
  const hotSettings = {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    autoColumnSize: true,
    afterChange: (changes: any, source: any) => {
      // adicionar lógica para lidar com as alterações na planilha
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

export default Spreadsheet;
