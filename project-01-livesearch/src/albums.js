import React, { Component } from 'react';
import movies from './movies.json';
import { Card, Button, CardHeader, Col, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: movies,
            term: '',
            modal:false,
            videoItem: {}

        };
    }

    displayVideo(video) {
        const item = this.state.movies.find((item) => item.id === video.id);
        this.setState({videoItem: item});
        this.toggle();
      }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    componentDidMount() {
        this.setState({ movies: movies, modal:false });
    }

    showModal(movie){
        
    }


    searchAlbums(e) {
        if (e.target.value.length >= 2) {
            this.setState({ term: e.target.value });
        }
        else {
            this.setState({ term: '' });
        }

    }

    renderMovie(movie) {
        const attr = "holder.js/100px100?theme=thumb&bg=b9b919&fg=212529&text=" + movie.name;
        return ( 
            <Col sm="4" key={movie.name}>
             <Card className="mb-4">
               <CardHeader>{movie.name}</CardHeader>
               <CardBody>
                 <CardTitle>{movie.description.split(" ").splice(0, 10).join(" ")}</CardTitle>
                 <CardText>{movie.description.substring(0, 150) + "...."}</CardText>
                 <button type="button" className="btn btn-primary" onClick={() =>this.displayVideo(movie)} data-toggle="modal" data-target="#exampleModal">
                View Detail
                </button>
               </CardBody> 
             </Card>   
            </Col>      
        );
    }
    render() {
        const term = this.state.term;
        var filteredMovies = this.state.movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase()));
        if (term === null || term === '') {
            filteredMovies = this.state.movies;
        }

        return (
            <main role="main">
                <section className=" text-center">
                    <div className="container">
                        <h4 className="jumbotron-heading mt-3">Search Movies</h4>
                        <form>
                            <div className="form-group row">
                                <div className="col-sm-10 text-center mx-auto">
                                    <input type="text" onKeyUp={(e) =>this.searchAlbums(e)} className="form-control form-control-md" id="colFormLabelLg" placeholder="search movies live" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <p className=" container-fluid align-content-left">
                    <strong>total movies = {filteredMovies.length}</strong>
                </p>
                <div className="album py-2 bg-light">
                    <div className="container">
                        <div className="row">
                            <Row>
                                {
                                    filteredMovies.map((movie) => { return this.renderMovie(movie) })
                                }
                            </Row>                           
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={() =>this.toggle()}>
                    <ModalHeader toggle={() =>this.toggle()}>{this.state.videoItem.name}</ModalHeader>
                    <ModalBody>
                       {this.state.videoItem.description}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() =>this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </main>
        );
    }
}

export default Movies;