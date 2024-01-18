import React, { forwardRef, Component } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

// Importando estilos específicos do react-pdf para o zoom
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurando o worker do pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PageCover = forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

class PageFlipDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1, // Começar da página 1
      totalPage: 0,
      pdfPages: [], // Armazenar as páginas do PDF para renderização
      scale: 1.0, // Definindo a escala inicial do PDF
    };
  }

  nextButtonClick = () => {
    // Incrementar o número da página e verificar se ultrapassou o total
    const nextPage = this.state.page + 1;
    if (nextPage <= this.state.totalPage) {
      this.flipBook.pageFlip().flipNext();
      this.setState({ page: nextPage });
    }
  };

  prevButtonClick = () => {
    // Decrementar o número da página e verificar se é maior que 1
    const prevPage = this.state.page - 1;
    if (prevPage >= 1) {
      this.flipBook.pageFlip().flipPrev();
      this.setState({ page: prevPage });
    }
  };

  zoomIn = () => {
    this.setState((prevState) => ({ scale: prevState.scale + 0.1 }));
  };

  zoomOut = () => {
    this.setState((prevState) => ({ scale: Math.max(0.1, prevState.scale - 0.1) }));
  };

  onPage = (e) => {
    // Ajustar para começar da página 1
    this.setState({
      page: e.data + 1,
    });
  };

  componentDidMount() {
    // Usando o método `numPages` fornecido pelo react-pdf para obter o número total de páginas
    const totalPage = this.pdfDocument ? this.pdfDocument.numPages : 0;

    // Gerar as páginas do PDF inicialmente
    const pdfPages = Array.from({ length: totalPage }, (_, index) => (
      <div key={index + 1} className="page">
        <ReactPdfPage pageNumber={index + 1} width={550} height={400} scale={this.state.scale} />
      </div>
    ));

    this.setState({
      totalPage,
      pdfPages,
    });
  }

  setPdfDocument = (pdfDocument) => {
    this.pdfDocument = pdfDocument;
  };

  render() {
    return (
      <div className="flex items-center justify-center">
        <HTMLFlipBook
          width={350}
          height={450}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          ref={(el) => (this.flipBook = el)}
        >
          <PageCover>BOOK TITLE</PageCover>
          {this.state.pdfPages}
        </HTMLFlipBook>

        <div className="container">
          <div>
            <button type="button" className='absolute top-1/2 left-0 text-red-200' onClick={this.prevButtonClick}>
              Previous page
            </button>
            [<span>{this.state.page}</span> of <span>{this.state.totalPage}</span>]
            <button type="button" className='absolute top-1/2 right-0 text-red-400' onClick={this.nextButtonClick}>
              Next page
            </button>
          </div>
          <div>
            {/* Botões de zoom */}
            <button type="button" onClick={this.zoomIn}>
              Zoom In
            </button>
            <button type="button" onClick={this.zoomOut}>
              Zoom Out
            </button>
          </div>
          <div>
            State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default PageFlipDemo;
