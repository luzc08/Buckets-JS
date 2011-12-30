var buckets={};
(function(){var e,f,g;e=function(a,b){return a<b?-1:a===b?0:1};f=function(a,b){return a===b};g=function(a){return"[object String]"===Object.prototype.toString.call(a)?a:a.toString()};buckets.LinkedList=function(a){this.lastNode=this.firstNode=null;this.nElements=0;this.equalsF=a||f};buckets.LinkedList.prototype.add=function(a){return this.addElementAtIndex(a,this.nElements)};buckets.LinkedList.prototype.addElementAtIndex=function(a,b){if(0>b||b>this.nElements)return!1;var c={element:a,next:null};
if(0===this.nElements)this.lastNode=this.firstNode=c;else if(b===this.nElements)this.lastNode=this.lastNode.next=c;else if(0===b)c.next=this.firstNode,this.firstNode=c;else{for(var d=this.firstNode,h=0;h<b-1;h++)d=d.next;c.next=d.next;d.next=c}this.nElements++;return!0};buckets.LinkedList.prototype.first=function(){if(null!==this.firstNode)return this.firstNode.element};buckets.LinkedList.prototype.last=function(){if(null!==this.lastNode)return this.lastNode.element};buckets.LinkedList.prototype.elementAtIndex=
function(a){if(!(0>a||a>=this.nElements)){if(a===this.nElements-1)return this.lastNode.element;for(var b=this.firstNode,c=0;c<a;c++)b=b.next;return b.element}};buckets.LinkedList.prototype.indexOf=function(a){for(var b=this.firstNode,c=0;null!==b;){if(this.equalsF(b.element,a))return c;c++;b=b.next}return-1};buckets.LinkedList.prototype.contains=function(a){return 0<=this.indexOf(a)};buckets.LinkedList.prototype.remove=function(a){if(1>this.nElements)return!1;for(var b=null,c=this.firstNode;null!==
c;){if(this.equalsF(c.element,a)){if(c===this.firstNode){this.firstNode=this.firstNode.next;if(c===this.lastNode)this.lastNode=null;break}else if(c===this.lastNode)this.lastNode=b;b.next=c.next;c.next=null;break}b=c;c=c.next}this.nElements--;return!0};buckets.LinkedList.prototype.clear=function(){this.lastNode=this.firstNode=null;this.nElements=0};buckets.LinkedList.prototype.removeElementAtIndex=function(a){if(!(0>a||a>=this.nElements)){if(1===this.nElements)a=this.firstNode.element,this.lastNode=
this.firstNode=null;else{for(var b=null,c=this.firstNode,d=0;d<a;d++)b=c,c=c.next;a=c.element;if(c===this.lastNode)this.lastNode=b;else if(c===this.firstNode)this.firstNode=c.next;if(null!==b)b.next=c.next,c.next=null}this.nElements--;return a}};buckets.LinkedList.prototype.iterator=function(){var a=null,b=null,c=this.firstNode;return{hasNext:function(){return null!==c},next:function(){if(null!==c)return a=b,b=c,c=b.next,b.element},remove:function(){var d=b.element;b===this.firstNode?b===this.lastNode?
this.lastNode=this.firstNode=null:this.firstNode=c:b===this.lastNode?(this.lastNode=a,a.next=null):a.next=b.next;this.nElements--;return d},replace:function(a){if(null!==b){var c=b.element;b.element=a;return c}}}};buckets.LinkedList.prototype.toArray=function(){for(var a=[],b=this.firstNode;null!==b;)a.push(b.element),b=b.next;return a};buckets.LinkedList.prototype.size=function(){return this.nElements};buckets.LinkedList.prototype.isEmpty=function(){return 0>=this.nElements};buckets.Dictionary=function(a){this.table=
{};this.nElements=0;this.toStr=a||g};buckets.Dictionary.prototype.get=function(a){a=this.table[this.toStr(a)];return void 0===a?void 0:a.value};buckets.Dictionary.prototype.set=function(a,b){var c,d=this.toStr(a);c=this.table[d];void 0===c?(this.nElements++,c=void 0):c=c.value;this.table[d]={key:a,value:b};return c};buckets.Dictionary.prototype.remove=function(a){var a=this.toStr(a),b=this.table[a];if(void 0!==b)return delete this.table[a],this.nElements--,b.value};buckets.Dictionary.prototype.keys=
function(){var a=[],b;for(b in this.table)this.table.hasOwnProperty(b)&&a.push(this.table[b].key);return a};buckets.Dictionary.prototype.values=function(){var a=[],b;for(b in this.table)this.table.hasOwnProperty(b)&&a.push(this.table[b].value);return a};buckets.Dictionary.prototype.containsKey=function(a){return void 0!==this.get(a)};buckets.Dictionary.prototype.clear=function(){this.table={};this.nElements=0};buckets.Dictionary.prototype.size=function(){return this.nElements};buckets.Dictionary.prototype.isEmpty=
function(){return 0>=this.nElements};buckets.Heap=function(a){this.data=[];this.compare=a||e};buckets.Heap.prototype.leftChildIndex=function(a){return 2*a+1};buckets.Heap.prototype.rightChildIndex=function(a){return 2*a+2};buckets.Heap.prototype.parentIndex=function(a){return Math.floor((a-1)/2)};buckets.Heap.prototype.minIndex=function(a,b){return b>=this.data.length?a>=this.data.length?-1:a:0>=this.compare(this.data[a],this.data[b])?a:b};buckets.Heap.prototype.siftUp=function(a){for(var b=this.data[a];0<
a;){var c=this.parentIndex(a);if(0<this.compare(this.data[c],b))this.data[a]=this.data[c],a=c;else break}this.data[a]=b};buckets.Heap.prototype.siftDown=function(a){for(var b=this.minIndex(this.leftChildIndex(a),this.rightChildIndex(a));0<=b&&0<this.compare(this.data[a],this.data[b]);){var c=this.data[b];this.data[b]=this.data[a];this.data[a]=c;a=b;b=this.minIndex(this.leftChildIndex(a),this.rightChildIndex(a))}};buckets.Heap.prototype.peek=function(){if(0<this.data.length)return this.data[0]};buckets.Heap.prototype.add=
function(a){this.data.push(a);this.siftUp(this.data.length-1)};buckets.Heap.prototype.removeRoot=function(){if(0<this.data.length){var a=this.data[0];this.data[0]=this.data[this.data.length-1];this.data.splice(this.data.length-1,1);0<this.data.length&&this.siftDown(0);return a}};buckets.Heap.prototype.contains=function(a){for(var b=this.data.length,c=0;c<b;c++)if(0===this.compare(this.data[c],a))return!0;return!1};buckets.Heap.prototype.size=function(){return this.data.length};buckets.Heap.prototype.isEmpty=
function(){return 0>=this.data.length};buckets.Heap.prototype.clear=function(){this.data.length=0};buckets.Stack=function(a){this.list=new buckets.LinkedList(a)};buckets.Stack.prototype.push=function(a){this.list.addElementAtIndex(a,0)};buckets.Stack.prototype.add=function(a){this.list.addElementAtIndex(a,0)};buckets.Stack.prototype.pop=function(){return this.list.removeElementAtIndex(0)};buckets.Stack.prototype.peek=function(){return this.list.first()};buckets.Stack.prototype.size=function(){return this.list.size()};
buckets.Stack.prototype.contains=function(a){return this.list.contains(a)};buckets.Stack.prototype.isEmpty=function(){return this.list.isEmpty()};buckets.Stack.prototype.clear=function(){this.list.clear()};buckets.Queue=function(a){this.list=new buckets.LinkedList(a)};buckets.Queue.prototype.enqueue=function(a){this.list.add(a)};buckets.Queue.prototype.add=function(a){this.list.add(a)};buckets.Queue.prototype.dequeue=function(){if(0!==this.list.size()){var a=this.list.first();this.list.removeElementAtIndex(0);
return a}};buckets.Queue.prototype.peek=function(){if(0!==this.list.size())return this.list.first()};buckets.Queue.prototype.size=function(){return this.list.size()};buckets.Queue.prototype.contains=function(a){return this.list.contains(a)};buckets.Queue.prototype.isEmpty=function(){return 0>=this.list.size()};buckets.Queue.prototype.clear=function(){this.list.clear()};buckets.PriorityQueue=function(a){this.heap=new buckets.Heap(a)};buckets.PriorityQueue.prototype.enqueue=function(a){this.heap.add(a)};
buckets.PriorityQueue.prototype.add=function(a){this.heap.add(a)};buckets.PriorityQueue.prototype.dequeue=function(){if(0!==this.heap.size()){var a=this.heap.root();this.heap.removeRoot();return a}};buckets.PriorityQueue.prototype.peek=function(){return this.heap.root()};buckets.PriorityQueue.prototype.contains=function(a){return this.heap.contains(a)};buckets.PriorityQueue.prototype.isEmpty=function(){return this.heap.isEmpty()};buckets.PriorityQueue.prototype.size=function(){return this.heap.size()};
buckets.PriorityQueue.prototype.clear=function(){this.heap.clear()}})();
