//Feature
class FriendList{
    friends = []

    addFriend(name){
        this.friends.push(name);
        this.announceFriendship(name); 
    }

    announceFriendship(name){
        global.console.log(`${name} is now a friend`);
    }

    removeFriend(name){
        const idx = this.friends.indexOf(name);
        if (idx === -1 ){
            throw new Error('Friend not found!')
        } else {
            this.friends.splice(idx, 1);
        }
    }
}

//Test
describe('Show friendList', () => {
    let friendList;

    beforeEach(() => {
        friendList = new FriendList();
    })

    it('Intialize the friend class', () => {
        expect(friendList.friends.length).toEqual(0);
    });

    it('Add friend to the class', () => {
        friendList.addFriend('SwaggerOlu')
        expect(friendList.friends.length).toEqual(1);
    });

    it('announce friendship', () => {
        friendList.announceFriendship = jest.fn();
        expect(friendList.announceFriendship).not.toHaveBeenCalled();
        friendList.addFriend('SwaggerOlu')
        expect(friendList.announceFriendship).toHaveBeenCalledWith('SwaggerOlu');
    });

    describe('Remove a friend', () => {
        it('it should remove a friend from the list', () => {
            friendList.addFriend('SwaggerOlu');
            expect(friendList.friends[0]).toEqual('SwaggerOlu');
            friendList.removeFriend('SwaggerOlu');
            expect(friendList.friends[0]).toBeUndefined();
        });

        it('throw an error if it can remove a friend', () => {
            expect(() => friendList.removeFriend('SwaggerOlu')).toThrow(new Error('Friend not found!'));
        });
    })
})