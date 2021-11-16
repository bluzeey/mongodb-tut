import { assert } from 'console'
import {MarioChar} from '../models/mariocart.js'

describe('Finding a Mario Character',function(){
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
    it('Deletes a record in MongoDB',function(done){
            MarioChar.findOneandRemove({name:'Mario'}).then(function(){
                MarioChar.findOne({name:'Mario'}).then(function(result){
                  assert(result===null)
                })
                done();
            });
        });

   
})