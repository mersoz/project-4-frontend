angular
  .module('jobApp')
  .controller('PostsIndexCtrl', PostsIndexCtrl)
  .controller('PostsShowCtrl', PostsShowCtrl)
  .controller('PostsNewCtrl', PostsNewCtrl)
  .controller('PostsEditCtrl', PostsEditCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post) {
  const vm = this;
  vm.all = Post.query();
}

PostsShowCtrl.$inject = ['Post', 'User', 'Comment', '$stateParams', '$state', '$rootScope'];
function PostsShowCtrl(Post, User, Comment, $stateParams, $state, $rootScope) {
  const vm = this;
  vm.post = Post.get($stateParams);

  function postsDelete() {
    vm.post
      .$remove()
      .then(() => $state.go('postsIndex'));
  }
  vm.delete = postsDelete;

  function addComment() {
    vm.comment.post_id = vm.post.id;
    vm.comment.user_id = $rootScope.currentUser.id;

    Comment
      .save({ comment: vm.comment })
      .$promise
      .then((comment) => {
        vm.post.comments.push(comment);
        vm.comment = {};
      });
  }
  vm.addComment = addComment;

function deleteComment(comment) {
  console.log('deleting?');
  Comment
    .delete({ id: comment.id })
    .$promise
    .then(() => {
      const index = vm.post.comments.indexOf(comment);
      vm.post.comments.splice(index, 1);
    });
  }
  vm.deleteComment = deleteComment;
}

PostsNewCtrl.$inject = ['Post', '$state', '$rootScope'];
function PostsNewCtrl(Post, $state, $rootScope) {
  const vm = this;
  vm.post = {};

  function postsCreate() {
    vm.post.user_id = $rootScope.currentUser.id;

    Post
      .save({ post: vm.post })
      .$promise
      .then(() => $state.go('postsIndex'));
  }
  vm.create = postsCreate;
}

PostsEditCtrl.$inject = ['Post', '$stateParams', '$state'];
function PostsEditCtrl(Post, $stateParams, $state) {
  const vm = this;
  vm.post = Post.get($stateParams);

  function postsUpdate() {
    Post.update({ id: vm.post.id, post: vm.post })
      .$promise
      .then(() => $state.go('postsShow', $stateParams));
  }
  vm.update = postsUpdate;
}
