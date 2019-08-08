import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class Shoppinglist extends Component {
	//state come from itemReducer

	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<Container>
				<ListGroup>
					<TransitionGroup className="shopping-list">
						{items.map(({ _id, name }) => (
							<CSSTransition key={_id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button
										className="remove-btn"
										color="danger"
										size="sm"
										onClick={this.onDeleteClick.bind(this, _id)}
										/*() => {
											this.setState(
												this.setState((state) => ({
													items: state.items.filter((item) => item.id !== id)
												}))
											);
										}}*/
									>
										&times;
									</Button>
									{name}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

//prop types is to set types
Shoppinglist.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

//mapStateToProps allows us to take state, map it into a component property, so we can use in shoppinglist as this.props.items
const mapStateToProps = (state) => ({
	item: state.item //in rootReducer
});
export default connect(mapStateToProps, { getItems, deleteItem })(Shoppinglist);
