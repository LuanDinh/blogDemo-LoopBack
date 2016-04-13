module.exports = function(Article) {
    Article.getOne = function(id, cb) {
        Article.findById(id, function(err, instance) {
            cb(null, instance);
            console.log(instance);
        });
    };
    Article.remoteMethod(
        'getOne', {
            http: {
                path: '/getOne/:id',
                verb: 'get'
            },
            accepts: {
                arg: 'id',
                type: 'string',
                http: {
                    source: 'query'
                }
            },
            returns: {
                arg: 'data',
                type: Article,
                root: true
            }
        }
    );

    Article.createOne = function(body, cb) {
        Article.create(body, function(err, instance) {
            cb(null, instance);
            console.log(instance);
        });
    };
    Article.remoteMethod(
        'createOne', {
            http: {
                path: '/createOne',
                verb: 'post'
            },
            accepts: {
                arg: 'body',
                type: Article,
                http: {
                    source: 'body'
                }
            },
            returns: {
                arg: 'data',
                type: Article,
                root: true
            }
        }
    );

    Article.updateOne = function(body, id, cb) {
        Article.upsert(body, function(err, instance) {
            cb(null, instance);
            console.log(instance);
        });
    };
    Article.remoteMethod(
        'updateOne', {
            http: {
                path: '/updateOne/:id',
                verb: 'put'
            },
            accepts: [{
                arg: 'body',
                type: Article,
                http: {
                    source: 'body'
                }
            }, {
                arg: 'id',
                type: 'string',
                http: {
                    source: 'query'
                }
            }],
            returns: {
                arg: 'data',
                type: Article,
                root: true
            }
        }
    );

    Article.deleteOne = function(id, cb) {
        Article.destroyById(id, function(err) {
            cb(null);
        });
    };
    Article.remoteMethod(
        'deleteOne', {
            http: {
                path: '/deleteOne/:id',
                verb: 'delete'
            },
            accepts: {
                arg: 'id',
                type: 'string',
                http: {
                    source: 'query'
                }
            },
            returns: {
                arg: 'data',
                type: 'object',
                root: true
            }
        }
    );
};