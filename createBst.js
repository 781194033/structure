
/**
 * BST节点
 * @param {Number} value 节点储存的值
 */
function BSTNode(value) {
	this.left  = null;
	this.right = null;
	this.val   = value
}

/**
 * 创建或者插入BST节点
 * @param {Object} pNode BST根节点
 * @param {Number} value 要插入的节点的值
 * @return {Object}      根节点
 */
function insert(pNode, value){
	 if (pNode == null) {
	 	pNode = new BSTNode(value);
	 } else {
	 	if (pNode.val < value) {
		 	pNode.right = insert(pNode.right, value);
	 	} else if (pNode.val > value) {
	 		pNode.left = insert(pNode.left, value);
		} else {
	 		console.log(`${value} 已存在， 无须重复插入！`);
	 	}
	 } 
	 return pNode 
}

/**
 * 查询并返回这个节点
 * @param  {Object} pNode BST根节点
 * @param  {Number} value 查询的值
 * @return {Object}       不存在则返回null
 */
function search(pNode, value) {
	if (pNode == null || pNode.val === value) {
		return pNode;
	}

	if (pNode.val > value) {
		return search(pNode.left, value);
	} else {
		return search(pNode.right, value);
	}
}

/**
 * 中根遍历递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function inOrderTraverseNode(pNode, callback) {
	if (pNode) {
		inOrderTraverseNode(pNode.left, callback);
		callback(pNode.val);
		inOrderTraverseNode(pNode.right, callback);
	}
}


/**
 * 中根遍历非递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function _inOrderTraverseNode(pNode, callback) {
	if (pNode == null) {
		return null;
	}

	let p     = pNode,
		stack = [],
		tmp   = null;

	while (stack.length || p) {
		while (p) {
			stack.push(p);
			p = p.left;
		}

		if (stack.length) {
			tmp  = stack.pop();
			callback(tmp.val);
			p = tmp.right;
		}
	}
}

/**
 * 先根遍历递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function preOrderTraverseNode(pNode, callback) {
	if (pNode) {
		callback(pNode.val);
		inOrderTraverseNode(pNode.left, callback);
		inOrderTraverseNode(pNode.right, callback);
	}
}

/**
 * 先根遍历非递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function _preOrderTraverseNode(pNode, callback) {
	if (pNode == null) {
		return null;
	}

	let p     = pNode,
		stack = [],
		tmp   = null;

	while (stack.length || p) {
		while (p) {
			callback(p.val);
			stack.push(p);
			p = p.left;
		}

		if (stack.length) {
			tmp  = stack.pop();
			p = tmp.right;
		}
	}
}


/**
 * 后根遍历递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function  behindOrderTraverseNode(pNode, callback) {
	if (pNode) {
		inOrderTraverseNode(pNode.left, callback);
		inOrderTraverseNode(pNode.right, callback);
		callback(pNode.val);
	}
}


/**
 * 后根遍历非递归版
 * @param  {Object}   pNode    BST根节点
 * @param  {Function} callback 访问回调
 * @return {void}              void
 */
function  _behindOrderTraverseNode(pNode, callback) {
	if (pNode == null) {
		return null;
	}

	let p     = pNode,
		stack = [],
		tmp   = null;

	while (stack.length || p) {
		while (p) {
			p.isFirst = true;
			stack.push(p);
			p = p.left;
		}

		if (stack.length) {
			tmp  = stack[stack.length-1];

			if (tmp.isFirst) {
				tmp.isFirst = false;
				p=tmp.right;
			} else {
				callback(tmp.val);
				stack.pop();
				p = null;
			}
		}
	}
}
