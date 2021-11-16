import { assert } from 'console'
import {MarioChar} from '../models/mariocart.js'

describe('Saving a Mario Character',function(done){

    it('Saves a record in MongoDB',function(){
        var char=new MarioChar({
            name:'Mario',
            weight:60
        })
        char.save().then(function(){
            assert(char.isNew===false);
            done();
        });
    })
})