# Data Structures and Algorithms in JavaScript

A comprehensive collection of algorithms and data structures in JavaScript, based on the book [**"Mastering Algorithms and Data Structures in JavaScript"**](./data_structures_and_algorithms_in_javascript.pdf) by Federico Kereki.

## 📚 Overview

This repository contains the original working implementations from the book, organized and maintained for easy reference and learning. Each chapter focuses on specific concepts with working code examples and tests, exactly as provided by the author. Read the full book here: [**Mastering Algorithms and Data Structures in JavaScript (PDF)**](./data_structures_and_algorithms_in_javascript.pdf).

## 📚 Content Overview

### Core Topics

- **01 - Using JavaScript** - JavaScript fundamentals for algorithms
- **02 - Functional Programming** - Higher-order functions, memoization, and closures
- **03 - Abstract Data Types** - Stacks, queues, and other ADTs
- **05 - Designing Algorithms** - Recursion, backtracking, and dynamic programming
- **06 - Sorting** - Quicksort, mergesort, and in-place algorithms
- **07 - Selecting** - Selection algorithms and order statistics
- **08 - Shuffling and Sampling** - Randomization techniques
- **09 - Searching** - Binary search and search strategies

### Data Structures

- **10 - Lists** - Linked lists, arrays, and sequences
- **11 - Bags and Sets** - Set operations and implementations
- **12 - Binary Trees** - BST, AVL, splay trees, and randomized BSTs
- **13 - Trees and Forests** - General trees and tree traversals
- **14 - Heaps and Treaps** - Priority queues and randomized search trees
- **15 - Extended Heaps** - Binomial heaps and advanced structures
- **16 - Digital Trees** - Tries, radix trees, and ternary search trees
- **17 - Graphs** - Graph algorithms, topological sort, and cycle detection
- **18 - Functional Data Structures** - Persistent data structures

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install
```

### Usage

```bash
# Run a specific algorithm file
node "06 sorting/quicksort.js"

# Run tests
node "12 binary_trees/avl_tree.test.js"
```

## 🔧 Development

### Linting and Formatting

This project uses ESLint and Prettier for code quality and consistency.

```bash
# Check code style
pnpm run lint

# Fix linting issues
pnpm run lint:fix

# Check formatting
pnpm run format

# Fix formatting
pnpm run format:fix

# Run all checks
pnpm run check
```

## 📖 Code Examples

Each directory contains working implementations:

```javascript
// Example: Binary Search Tree
const {
  insert,
  find,
  remove
} = require("./12 binary_trees/binary_search_tree");

let tree = null;
tree = insert(tree, 5);
tree = insert(tree, 3);
tree = insert(tree, 7);

console.log(find(tree, 3)); // true
```

## 🏗️ Project Structure

```
.
├── 01 using_js/                    # JavaScript fundamentals
├── 02 functional_programming/      # FP concepts
├── 03 abstract_data_types/         # Basic ADTs
├── 05 designing_algorithms/        # Algorithm design patterns
├── 06 sorting/                     # Sorting algorithms
├── 07 selecting/                   # Selection algorithms
├── 08 shuffling_and_sampling/      # Randomization
├── 09 searching/                   # Search algorithms
├── 10 lists/                       # List implementations
├── 11 bags_and_sets/               # Set data structures
├── 12 binary_trees/                # Binary search trees
├── 13 trees_and_forests/           # Tree structures
├── 14 heaps_and_treaps/            # Heaps and treaps
├── 15 extended_heaps/              # Advanced heaps
├── 16 digital_trees/               # Tries and digital trees
├── 17 graphs/                      # Graph algorithms
├── 18 functional_data_structures/  # Persistent structures
└── data/                           # Test data files
```

---

_All implementations are from the book "Mastering Algorithms and Data Structures in JavaScript" by Federico Kereki._
