//* tree
//* undirected graph의 한종류, Minimum Spanning Tree(MST)라고도 불린다.
//* N개의 node, N-1개의 edge

//* node : tree 구조에서 데이터의 상하위 계층을 나타내는 위치의 항목. 분기.
//* root node: 부모가 없는 최상단의 node. tree는 하나의 root를 갖는다.
//* parent node: 부모 node. root를 제외한 모든 node는 부모를 갖는다.
//* child node: 자식 node. 부모로 부터 분기된 node
//* leaf node: 자식이 없는 node, 말단, 잎, 외부
//* internal node: leaf가 아닌 node
//* siblings : 형제, 같은 부모를 가지는 node의 관계.
//* depth : root에서 어떤 node에 도달하기 위해 거쳐야 하는 edge의 수
//* level : tree의 특정 깊이를 가지는 node의 집합
//* height : root로 부터 가능 큰 depth.
//* subtree : 자신을 포함하는 tree안에서의 또 다른 tree. subtree의 root는 자신을 포한하는 tree의 모든 node가 될수있다.

//* size : 자신을 포함한 모든 자식 node의 개수
//* degree :  개수 / 간선 수 (degree) = 각 노드가 지닌 가지의 수
//* degree of tree : 트리의 최대 차수

//* tree 대표적 유형.
//* Binary Trees(BT)
//* Binary Search Trees(BST) : 이진탐색(binary search)과 연결리스트(linked list)를 결합한 자료구조의 일종. 왼쪽에 작은거, 오른쪽에 큰거.
//* AVL Trees
//* Red - Black Trees : self-balancing binary search tree
//* 2 - 3 Trees
//* 2-3-4 Trees

//* Binary Tree : 자식 노드의 수가 최대 2개
//* rooted binary tree(루트 이진 트리)
//* full binary tree, plane binary tree(정 이진 트리) : 노드가 0 또는 2
//* perfect binary tree(포화 이진 트리) : 모든 내부 노드가 두 개의 자식 노드를 가지며 모든 잎 노드가 동일한 깊이 또는 레벨을 갖는다
//* complete binary tree(완전 이진 트리) : 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨의 모든 노드는 가능한 한 가장 왼쪽에 있다.
//* balanced binary tree(균형 이진 트리) : 잎 노드에 대해 가능한 한 최대의 최소 높이, 모든 노드의 왼쪽과 오른쪽의 하위 트리와의 높이가 1 이상 차이가 나지 않는 이진 트리 구조
//* degenerate tree : 각 부모 노드는 오직 한 개의 연관 자식 노드를 갖는다. 이는 성능 면에서 트리가 linked list 데이터 구조처럼 동작한다는 것을 의미
