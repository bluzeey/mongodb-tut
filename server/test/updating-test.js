import { assert } from 'console'
import {MarioChar} from '../models/mariocart.js'

describe('Updating a Mario Character',function(){
    var char
    beforeEach(function(done){
        char=new MarioChar({
            name:'Mario',
            weight:60
        })
        char.save().then(function(){
            done();
        });
    })
    it('Updates a record in MongoDB',function(done){
            MarioChar.findOneandUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
               MarioChar.findOne({id:char._id}).then(function(result){
                   assert(result.name==='Luigi')
               })
            });
        });
    it('Increment weight by 1',function(done){
            MarioChar.update({},{$inc:{weight:1}}).then(function(){
               MarioChar.findOne({name:'Mario'}).then(function(result){
                   assert(result.weight===51)
               })
            });
        });
   
})